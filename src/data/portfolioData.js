export const portfolioData = {
  hero: {
    name: "Ritu Saxena",
    title: "Data Analyst & Business Intelligence Specialist",
    tagline: "Transforming raw data into actionable business strategies.",
    summary: "Specializing in SQL, Python, and Tableau to uncover trends that drive revenue growth."
  },
  skills: [
    { category: "Data Analysis", tools: ["SQL (PostgreSQL, MySQL)", "Python (Pandas, NumPy)", "Excel (VLOOKUP, Pivot Tables)"] },
    { category: "Visualization", tools: ["Tableau", "Power BI", "Matplotlib", "Seaborn"] },
    { category: "Technical", tools: ["Git/GitHub", "Jupyter Notebooks", "AWS QuickSight"] }
  ],
  projects: [
    {
      id: 1,
      title: "E-Commerce Sales Dashboard",
      role: "Lead Analyst",
      problem: "Client needed real-time visibility into regional sales performance and inventory lag.",
      tools: ["Power BI", "SQL", "Excel"],
      insight: "Identified a 15% revenue dip in the Northwest region due to supply chain bottlenecks.",
      impact: "Optimized inventory distribution, recovering $50k/month in lost potential revenue.",
      image: "https://via.placeholder.com/400x250?text=Sales+Dashboard" // Replace with real screenshot
    },
    {
      id: 2,
      title: "Customer Churn Prediction Model",
      role: "Data Scientist",
      problem: "High churn rate (8%) in the subscription model required predictive analysis.",
      tools: ["Python", "Scikit-Learn", "Pandas"],
      insight: "Customers with < 3 support interactions in the first month were 4x more likely to churn.",
      impact: "Developed a 'Risk Flag' system for CS teams, reducing churn by 2% in Q3.",
      image: "https://via.placeholder.com/400x250?text=Churn+Analysis"
    }
  ],

};