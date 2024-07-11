function calculateIndividualNetSalary(basicSalary) {
    const payeeRates = function(basicSalary) {
        if (basicSalary > 0 && basicSalary <= 24000) {
            return basicSalary * 0.1;
        } else if (basicSalary > 24000 && basicSalary <= 32333) {
            return basicSalary * 0.25;
        } else if (basicSalary > 32333 && basicSalary <= 41999) {
            return basicSalary * 0.3;
        } else if (basicSalary > 41999 && basicSalary <= 499999) {
            return basicSalary * 0.35;
        } else {
            return 0;
        }
    };

    
    const NhifRates = function(basicSalary) {
        if (basicSalary > 0 && basicSalary <= 5999) {
            return 150;
        } else if (basicSalary > 5999 && basicSalary <= 7999) {
            return 300;
        } else if (basicSalary > 7999 && basicSalary <= 11999) {
            return 400;
        } else if (basicSalary > 11999 && basicSalary <= 14999) {
            return 500;
        } else if (basicSalary > 14999 && basicSalary <= 19999) {
            return 600;
        } else if (basicSalary > 19999 && basicSalary <= 24999) {
            return 750;
        } else if (basicSalary > 24999 && basicSalary <= 29999) {
            return 850;
        } else if (basicSalary > 29999 && basicSalary <= 34999) {
            return 900;
        } else if (basicSalary > 34999 && basicSalary <= 39999) {
            return 950;
        } else if (basicSalary > 39999 && basicSalary <= 44999) {
            return 1000;
        } else if (basicSalary > 44999 && basicSalary <= 49999) {
            return 1100;
        } else if (basicSalary > 49999 && basicSalary <= 59999) {
            return 1200;
        } else if (basicSalary > 59999 && basicSalary <= 69999) {
            return 1300;
        } else if (basicSalary > 69999 && basicSalary <= 79999) {
            return 1400;
        } else if (basicSalary > 79999 && basicSalary <= 89999) {
            return 1500;
        } else if (basicSalary > 89999 && basicSalary <= 99999) {
            return 1600;
        } else {
            return 1700;
        }
    };

    
    const nssfRates = function(basicSalary) {
        return basicSalary * 0.06;
    };

    
    let netSalary = basicSalary - (nssfRates(basicSalary) + NhifRates(basicSalary) + payeeRates(basicSalary));

    return netSalary;
}


let basicSalaryInput = parseFloat(prompt("Enter the basic salary:"));


if (isNaN(basicSalaryInput) || basicSalaryInput < 0) {
    console.log("Invalid input. Please enter a valid positive number.");
} else {
    
    let netSalary = calculateIndividualNetSalary(basicSalaryInput);
    console.log(`Net Salary: ${netSalary}`);
}
