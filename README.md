# Grid Layout Playground: Interactive CSS Grid Layout Tutorial

Welcome to the **Grid Layout Playground**, an interactive tutorial designed to help you master CSS Grid! This tool allows you to experiment with grid container and item properties, observe changes in real-time, and gain a solid understanding of how grid layouts work. Perfect for visual learners who love hands-on practice!

## Table of Contents
- [Features](#features)
- [Usage](#usage)
  - [Grid Controls](#grid-controls)
  - [Item Controls](#item-controls)
- [Code Structure](#code-structure)
- [Examples](#examples)
- [Demo](#demo)
- [License](#license)

## Features
- **Interactive Grid Controls**: Adjust properties like `grid-template-columns`, `grid-template-rows`, `gap`, and alignment settings.
- **Real-Time Visual Feedback**: See immediate updates on grid items as you modify the grid structure.
- **Individual Grid Item Customization**: Change properties such as `grid-column-start`, `grid-row-start`, `justify-self`, and `align-self`.
- **Dynamic Item Selection**: Select specific grid items for detailed customization.

## Usage
### Grid Controls
Modify the grid container's layout using the **Grid Box Playground** panel. Here's a breakdown of the available controls:
- **Columns**: Define the number of columns using `grid-template-columns`.
- **Rows**: Define the number of rows using `grid-template-rows`.
- **Gap**: Set the space between items (`gap`, `row-gap`, and `column-gap`).
- **Justify Items**: Align items horizontally within the grid.
- **Align Items**: Align items vertically within the grid.

### Item Controls
In the **Grid Item Playground** panel, select a grid item to modify its properties:
- **Column Start**: Set the starting column position for the selected item.
- **Column End**: Set the ending column position for the selected item.
- **Row Start**: Set the starting row position for the selected item.
- **Row End**: Set the ending row position for the selected item.
- **Justify Self**: Horizontally align the item within its cell.
- **Align Self**: Vertically align the item within its cell.

## Code Structure
- **index.html**: Contains the HTML structure for the playground and grid items.
- **style.css**: Defines base styles, grid setup, and visual appearance of items.
- **index.js**: Contains JavaScript code for managing dynamic property changes and resetting values.

## Examples
1. **Change Column Count**: Adjust the "Columns" slider to see items rearranged across the grid.
2. **Set Custom Gaps**: Use the "Gap" slider to add spacing between rows and columns.
3. **Customize a Grid Item**: Select an item (e.g., "Item 3") and modify its `grid-column` or `grid-row` properties to reposition it.

## Demo
> **Link to Demo**: [URL](https://ujjwalgarai.github.io/interactive-grid-layout-playground/) 

## License
This project is licensed under the MIT License.

---

Experiment and explore the capabilities of CSS Grid with this interactive playground. Contributions and feedback are always welcome!
