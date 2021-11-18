function grader(grade) {
  switch (true) {
    case grade < 0.6 || grade > 1:
      return "F";
    case grade >= 0.9:
      return "A";
    case grade >= 0.8:
      return "B";
    case grade >= 0.7:
      return "C";
    case grade >= 0.6:
      return "D";
  }
}
