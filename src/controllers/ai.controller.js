const { GoogleGenerativeAI } = require("@google/generative-ai")

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

const getAIInsights = async (req, res) => {
  try {

    const { income, expenses, categories } = req.body

    const model = genAI.getGenerativeModel({
      model: "gemini-3.1-flash-lite-preview"
    })

    const prompt = `
User financial summary:

Income: ${income}
Expenses: ${expenses}
Categories: ${categories}

Analyze the user's spending and provides:
1. A short financial health summary.
2. Saving suggestions
3. Spending improvement tip 
keep answer in mid range
`

    const result = await model.generateContent(prompt)

    const texts = result.response.text()

    res.json({ insights: texts })

  } catch (error) {
    console.log("AI ERROR:", error)
    res.status(500).json({ error: "AI analysis failed" })
  }
}

module.exports = { getAIInsights }