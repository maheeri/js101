function getGrade(score1, score2, score3) {
  let scoreSum = score1 + score2 + score3;
  let avgScore = scoreSum / 3;
  if (avgScore >= 90) {
    return 'A';
  } else if (avgScore >= 80) {
    return 'B';
  } else if (avgScore >= 70) {
    return 'C';
  } else if (avgScore >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(95, 90, 93) === "A");
console.log(getGrade(50, 50, 95) === "D");