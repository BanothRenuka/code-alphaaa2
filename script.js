// ================= RECRUITMENT METRICS =================
new Chart(document.getElementById("recruitmentChart"), {
    type: "bar",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            label: "New Hires",
            data: [5, 8, 6, 10, 9, 12],
            backgroundColor: "green"
        }]
    }
});

// ================= TURNOVER RATE =================
new Chart(document.getElementById("turnoverChart"), {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            label: "Turnover %",
            data: [4, 3.5, 5, 4.2, 3.8, 3],
            borderColor: "red",
            fill: false
        }]
    }
});

// ================= EMPLOYEE SATISFACTION =================
new Chart(document.getElementById("satisfactionChart"), {
    type: "pie",
    data: {
        labels: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"],
        datasets: [{
            data: [40, 35, 15, 10],
            backgroundColor: ["darkgreen", "lightgreen", "orange", "red"]
        }]
    }
});

// ================= PERFORMANCE ANALYSIS =================
new Chart(document.getElementById("performanceChart"), {
    type: "bar",
    data: {
        labels: ["Excellent", "Good", "Average", "Poor"],
        datasets: [{
            label: "Employees",
            data: [30, 45, 20, 5],
            backgroundColor: "blue"
        }]
    }
});

// ================= HIRING FORECAST =================
new Chart(document.getElementById("forecastChart"), {
    type: "line",
    data: {
        labels: ["Q1", "Q2", "Q3", "Q4", "Q1 (Next Yr)", "Q2 (Next Yr)"],
        datasets: [
            {
                label: "Actual Hiring",
                data: [15, 18, 20, 22],
                borderColor: "green",
                fill: false
            },
            {
                label: "Forecasted Hiring",
                data: [null, null, null, 22, 26, 30],
                borderColor: "orange",
                borderDash: [5, 5],
                fill: false
            }
        ]
    }
});
