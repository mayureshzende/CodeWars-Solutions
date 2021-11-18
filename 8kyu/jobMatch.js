function match(candidate, job) {
  // is this job a valid match for the candidate?
  if (!candidate.minSalary | !job.maxSalary) return new Error("");
  return candidate.minSalary * 0.9 <= job.maxSalary;
}
