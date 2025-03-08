
export const fetchAssignments = async () => {
  try {
    const response = await fetch("/assignments.json"); // Fetch from local file
    if (!response.ok) {
      throw new Error(`Failed to load assignments: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching assignments:", error.message);
    return [];
  }
};