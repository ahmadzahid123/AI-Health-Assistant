interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface DeepSeekResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

class AIHealthService {
  private apiKey: string;
  private apiUrl: string;
  private conversationHistory: ChatMessage[] = [];

  constructor() {
    this.apiKey = import.meta.env.VITE_DEEPSEEK_API_KEY;
    this.apiUrl = import.meta.env.VITE_DEEPSEEK_API_URL;
    
    // Initialize with system prompt for healthcare domain
    this.conversationHistory = [{
      role: 'system',
      content: `You are HealthPK AI, Pakistan's most advanced AI Health Assistant powered by DeepSeek R1 Distill Llama 70B. You are specifically designed for Pakistani healthcare context.

CORE IDENTITY:
- You are a professional, empathetic AI health assistant
- You understand Pakistani culture, languages (Urdu, Punjabi, Sindhi, Pashto), and healthcare system
- You provide evidence-based medical guidance while being culturally sensitive
- You always recommend consulting qualified healthcare professionals for serious concerns

CAPABILITIES:
- Symptom analysis and preliminary health guidance
- Medicine information and drug interactions
- First aid and emergency guidance
- Mental health support and counseling
- Preventive healthcare advice
- Nutrition and lifestyle recommendations
- Women's health and maternal care guidance
- Child health and pediatric advice

SAFETY PROTOCOLS:
- Always include emergency numbers: 1122 (Rescue), 115 (Edhi), 1021 (Ambulance)
- For serious symptoms, immediately recommend emergency services
- Never provide definitive diagnoses - only guidance and recommendations
- Always suggest consulting with qualified doctors for proper treatment
- Be aware of Pakistan's healthcare infrastructure and accessibility challenges

COMMUNICATION STYLE:
- Professional yet warm and empathetic
- Use simple, clear language accessible to all education levels
- Include relevant Urdu terms when helpful
- Provide practical, actionable advice
- Show cultural sensitivity and understanding

EMERGENCY INDICATORS:
If user mentions: chest pain, difficulty breathing, severe bleeding, loss of consciousness, severe burns, poisoning, severe allergic reactions, stroke symptoms, heart attack symptoms - immediately provide emergency guidance and contact numbers.

Remember: You are serving Pakistan's diverse population, including remote areas with limited healthcare access. Your guidance can be life-saving.`
    }];
  }

  async sendMessage(userMessage: string): Promise<string> {
    try {
      // Add user message to conversation history
      this.conversationHistory.push({
        role: 'user',
        content: userMessage
      });

      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: 'deepseek-r1-distill-llama-70b',
          messages: this.conversationHistory,
          max_tokens: 1500,
          temperature: 0.7,
          top_p: 0.9,
          stream: false
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data: DeepSeekResponse = await response.json();
      const aiResponse = data.choices[0]?.message?.content || 'I apologize, but I encountered an error. Please try again.';

      // Add AI response to conversation history
      this.conversationHistory.push({
        role: 'assistant',
        content: aiResponse
      });

      // Keep conversation history manageable (last 10 exchanges)
      if (this.conversationHistory.length > 21) { // 1 system + 20 messages
        this.conversationHistory = [
          this.conversationHistory[0], // Keep system message
          ...this.conversationHistory.slice(-20) // Keep last 20 messages
        ];
      }

      return aiResponse;
    } catch (error) {
      console.error('DeepSeek API Error:', error);
      return this.getFallbackResponse(userMessage);
    }
  }

  private getFallbackResponse(userMessage: string): string {
    const lowerMessage = userMessage.toLowerCase();
    
    // Emergency keywords
    if (lowerMessage.includes('emergency') || lowerMessage.includes('urgent') || 
        lowerMessage.includes('chest pain') || lowerMessage.includes('breathing')) {
      return `🚨 **EMERGENCY RESPONSE**

If this is a medical emergency, please call immediately:
📞 **1122** - Pakistan Rescue Services
📞 **115** - Edhi Ambulance Service
📞 **1021** - Ambulance Service

For chest pain or breathing difficulties:
1. Stay calm and sit upright
2. Loosen tight clothing
3. If you have prescribed medication (like nitroglycerin), take it
4. Call emergency services immediately

I'm here to help, but for urgent medical situations, professional emergency care is essential.`;
    }

    // Fever related
    if (lowerMessage.includes('fever') || lowerMessage.includes('bukhar') || lowerMessage.includes('temperature')) {
      return `🌡️ **Fever Management Guidance**

**Immediate Care:**
• Take paracetamol 500mg every 6 hours (max 4 doses/day)
• Drink plenty of fluids - water, ORS, fresh juices
• Rest in a cool, well-ventilated room
• Use cool compresses on forehead

**Monitor for these warning signs:**
⚠️ Fever above 103°F (39.4°C)
⚠️ Difficulty breathing or chest pain
⚠️ Severe headache or neck stiffness
⚠️ Persistent vomiting or dehydration
⚠️ Confusion or altered consciousness

**When to seek immediate help:**
Call **1122** if fever is accompanied by severe symptoms.

**Find a doctor:** I can help you locate nearby healthcare providers.

*This is general guidance. For persistent fever or concerning symptoms, please consult a qualified doctor.*`;
    }

    // General health guidance
    return `🏥 **HealthPK AI Assistant**

Thank you for reaching out. I'm here to provide health guidance and support.

**I can help you with:**
• Symptom analysis and health advice
• Medicine information and interactions
• First aid and emergency guidance
• Finding doctors and healthcare facilities
• Preventive health recommendations
• Mental health support

**For immediate medical emergencies:**
📞 **1122** - Pakistan Rescue Services
📞 **115** - Edhi Ambulance Service

**Important:** This guidance is for informational purposes only. Always consult qualified healthcare professionals for proper diagnosis and treatment.

How can I assist you with your health concerns today?`;
  }

  clearConversation(): void {
    this.conversationHistory = [this.conversationHistory[0]]; // Keep only system message
  }

  getConversationHistory(): ChatMessage[] {
    return this.conversationHistory.slice(1); // Return without system message
  }
}

export const aiHealthService = new AIHealthService();