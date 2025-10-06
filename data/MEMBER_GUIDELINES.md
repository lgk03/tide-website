# Member Data Guidelines

## CSV Format
The `members.csv` file contains member information for the carousel component.

### Fields:
- **name**: Member's name (max 50 characters)
- **role**: Academic degree/program (max 100 characters)  
- **background**: Area of expertise (max 100 characters)
- **quote**: Inspirational quote (max 150 characters recommended)
- **photo**: Path to profile photo
- **linkedin**: LinkedIn profile URL
- **color**: Tailwind gradient classes for card styling

### Character Limits:
- **Name**: 50 characters max
- **Role**: 100 characters max  
- **Background**: 100 characters max
- **Quote**: 150 characters recommended (200 max)
  - Quotes longer than 150 chars will be truncated with "..."
  - Keep quotes concise and impactful

### Photo Guidelines:
- Place photos in `public/static/images/members/`
- Use format: `firstname.jpg`
- Square format recommended (200x200px minimum)
- High quality for crisp display

### Example Row:
```csv
John D.,M.Sc. Data Science,Machine Learning & AI,"Building the future of data science, one algorithm at a time.",/static/images/members/john.jpg,https://linkedin.com/in/john-d,from-blue-500 to-green-500
```

### Color Options:
Use Tailwind gradient classes like:
- `from-blue-500 to-purple-600`
- `from-green-500 to-blue-500`  
- `from-pink-500 to-red-500`
- `from-yellow-500 to-orange-500`
- `from-indigo-500 to-cyan-500`