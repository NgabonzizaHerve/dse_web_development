function analyseMarks(marks, passMark = 50) {
    if (!Array.isArray(marks) || marks.length === 0) {
        return null;
    }

    if (typeof passMark !== 'number' || !Number.isInteger(passMark) || passMark < 0 || passMark > 100) {
        return null;
    }

    for (let i = 0; i < marks.length; i++) {
        const mark = marks[i];
        if (typeof mark !== 'number' || !Number.isInteger(mark) || mark < 0 || mark > 100) {
            return null;
        }
    }

    let total = 0;
    let highest = marks[0];
    let lowest = marks[0];
    let passed = 0;
    let failed = 0;
    let evenCount = 0;

    let i = 0;
    while (i < marks.length) {
        const mark = marks[i];
        total += mark;

        if (mark > highest) highest = mark;
        if (mark < lowest) lowest = mark;

        if (mark >= passMark) {
            passed++;
        } else {
            failed++;
        }

        if (mark % 2 === 0) {
            evenCount++;
        }

        i++;
    }

    const numStudents = marks.length;
    const average = Number((total / numStudents).toFixed(2));
    const range = highest - lowest;
    const passRate = Number(((passed / numStudents) * 100).toFixed(2));

    const status = average >= passMark ? "Target met" : "Needs support";

    let grade;
    switch (true) {
        case (average >= 80):
            grade = 'A';
            break;
        case (average >= 60):
            grade = 'B';
            break;
        case (average >= 50):
            grade = 'C';
            break;
        default:
            grade = 'D';
    }

    return {
        total,
        average,
        highest,
        lowest,
        passed,
        failed,
        evenCount,
        range,
        passRate,
        status,
        grade
    };
}

console.log("Test 1:", analyseMarks([78, 45, 90, 62, 50, 0, 100, 33], 50));
console.log("Test 2:", analyseMarks([0, 50, 100], 50));
console.log("Test 3:", analyseMarks(["70", 40], 50));
console.log("Test 4:", analyseMarks([], 50));
console.log("Test 5:", analyseMarks([78, 45], 101));
