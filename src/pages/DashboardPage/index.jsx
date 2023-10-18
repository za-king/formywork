import React from "react";
import GitHubCalendar from "react-github-calendar";
import Layout from "../../components/Layout";
function DashboardPage() {
  return (
    <Layout>
      <div className="h-screen bg-white dark:bg-slate-800 dark:text-white">
        <div className="container text-center grid justify-center py-12">
          <div className="text-4xl  ">Dashboard</div>
          <div className="py-12">
            <GitHubCalendar username="za-king" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DashboardPage;
