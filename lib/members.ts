import fs from 'fs'
import path from 'path'

export interface Member {
  name: string
  role: string
  background: string
  quote: string
  photo: string
  linkedin: string
  color: string
}

export function getMembers(): Member[] {
  const csvPath = path.join(process.cwd(), 'data', 'members.csv')
  const csvContent = fs.readFileSync(csvPath, 'utf-8')
  
  const lines = csvContent.trim().split('\n')
  const headers = parseCSVLine(lines[0])
  
  return lines.slice(1).map((line, index) => {
    // Handle CSV parsing with quoted fields that might contain commas
    const values = parseCSVLine(line)
    const member: any = {}
    
    headers.forEach((header, headerIndex) => {
      const cleanHeader = header.trim()
      const cleanValue = values[headerIndex]?.trim().replace(/^"|"$/g, '') || ''
      member[cleanHeader] = cleanValue
    })
    
    // Add fallback values and character limits to prevent undefined and overflow
    return {
      name: (member.name || `Member ${index + 1}`).substring(0, 50),
      role: (member.role || 'Unknown Role').substring(0, 100),
      background: (member.background || 'Unknown Background').substring(0, 100),
      quote: (member.quote || 'No quote available').substring(0, 200),
      photo: member.photo || '/static/images/avatar.png',
      linkedin: member.linkedin || '#',
      color: member.color || 'from-gray-500 to-gray-600'
    } as Member
  }).filter(member => member.name !== `Member ${lines.length}`) // Filter out empty rows
}

function parseCSVLine(line: string): string[] {
  const result = []
  let current = ''
  let inQuotes = false
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i]
    
    if (char === '"') {
      inQuotes = !inQuotes
    } else if (char === ',' && !inQuotes) {
      result.push(current)
      current = ''
    } else {
      current += char
    }
  }
  
  result.push(current)
  return result
}