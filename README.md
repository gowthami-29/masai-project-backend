
# 💼 Finance Tracker – Backend API
  ## 📌 Project Overview
      This is the backend service for the Finance Tracker application.
      It manages authentication, income tracking, expense management, recurring payments, and split expenses.
      The API is built using Node.js and Express, connected to Supabase (PostgreSQL), and deployed on Render.
      Each user can only access their own financial data using JWT-based authentication and database-level filtering.
# 🛠 Tech Stack
    🔹 Node.js
    🔹 Express.js
    🔹 Supabase (PostgreSQL)
    🔹 JWT Authentication
    🔹 Render (Deployment)
# 🌐 Base URL (Live Backend)
    https://fintrack-api-wn7l.onrender.com⁠�
# 📚 API Documentation
    🔐 Authentication
      POST /auth/register
      Create new user account
      POST /auth/login
      Login user and return JWT token
    💰 Income
      GET /income
      Get all incomes for logged-in user
      POST /income
      Add new income
      PUT /income/:id
      Update income
      DELETE /income/:id
      Delete income
    💳 Expenses
      GET /expenses
      Get all expenses
      POST /expenses
      Add new expense
      PUT /expenses/:id
      Update expense
      DELETE /expenses/:id
      Delete expense
    🔁 Recurring Payments
      GET /recurring
      Get all recurring payments
      POST /recurring
      Create recurring payment
      PUT /recurring/:id
      Update recurring payment
      DELETE /recurring/:id
    
    👥 Split Expenses
      GET /splits
      Get all split expenses
      POST /splits
      Create split expense
      DELETE /splits/:id
      Delete split expense
# 🗄 Database Schema Overview
  # Users Table
      id (UUID)
      email
      password
      created_at
      Income Table
      id
      user_id
      title
      amount
      category
      created_at
  # Expenses Table
      id
      user_id
      title
      amount
      category
      created_at
  # Recurring Payments Table
      id
      user_id
      title
      amount
      frequency
      start_date
      next_run_date
      status
  # Expense Splits Table
      id
      user_id
      expense_id
      total_amount
      split_type
      participants
# ⚙ Installation Steps
  # Clone the repository
    git clone 
  # Navigate into folder
    cd backend
  # Install dependencies
    npm install
  
   Start server
   npm run dev
# 🚀 Deployment
  # Backend deployed on Render:
    https://fintrack-api-wn7l.onrender.com⁠�
