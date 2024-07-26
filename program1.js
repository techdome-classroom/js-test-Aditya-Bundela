const getTotalIsles = (grid) => {
    if (grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let islandCount = 0;

    // Helper function for DFS
    const dfs = (r, c) => {
        // Check bounds and if cell is 'L'
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 'W') return;
        
        // Mark this cell as visited by changing it to 'W'
        grid[r][c] = 'W';
        
        // Explore all 4 directions
        dfs(r + 1, c); // Down
        dfs(r - 1, c); // Up
        dfs(r, c + 1); // Right
        dfs(r, c - 1); // Left
    };

    // Iterate through the grid
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 'L') {
                // Start a new island search
                islandCount++;
                dfs(r, c);
            }
        }
    }

    return islandCount;
};

module.exports = getTotalIsles;


module.exports = getTotalIsles;