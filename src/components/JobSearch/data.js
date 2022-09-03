export const items = [
  { id: 1, text: 'Skills' },
  { id: 2, text: 'Company' },
  { id: 3, text: 'Locations' },
  { id: 4, text: 'Function' },
  { id: 5, text: 'Industry' },
  { id: 6, text: 'Roles' },
]

function Skills() {
  return (
    <div className='showItem1'>
      <p>java</p>
      <p>python</p>
      <p>java</p>
      <p>python</p>
      <p>java</p>
      <p>python</p>
      <p>java</p>
      <p>python</p>
      <p>java</p>
      <p>python</p>
    </div>
  )
}

function Company() {
  return (
    <div className='showItem'>
      <p>Bengaluru</p>
      <p>Mumbai</p>
      <p>Bengaluru</p>
      <p>Mumbai</p>
      <p>Bengaluru</p>
      <p>Mumbai</p>
      <p>Bengaluru</p>
      <p>Mumbai</p>
      <p>Bengaluru</p>
      <p>Mumbai</p>
    </div>
  )
}

export { Skills, Company }
