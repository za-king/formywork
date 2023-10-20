import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import Layout from "../../components/Layout";
function DashboardPage() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(localStorage.theme);
  }, []);

  console.log(theme);
  return (
    <Layout>
      <div className="h-screen bg-white dark:bg-slate-800 dark:text-white">
        <div className="container text-center grid justify-center py-12">
          <div className="text-4xl font-bold ">Dashboard</div>
          <div className="py-12">
            {theme && <GitHubCalendar username="za-king" colorScheme={theme} />}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DashboardPage;
