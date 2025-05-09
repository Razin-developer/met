const Table = ({ sortedStudents }: { sortedStudents: ({ name: string; place: number; chestNo: string; class: number; division: string; } | { name: string; place: null; chestNo: string; class: number; division: string; } | { name: string; place: number; chestNo: string; grade: string; class: number; division: string; })[] }) => {
  const tableStyles: React.CSSProperties = {
    width: '100%',
    maxWidth: '794px', // A4 width in px
    backgroundColor: 'white',
    padding: '1rem',
    borderRadius: '0.375rem',
    margin: '0 auto', // center on page
    boxSizing: 'border-box',
  };


  const tableHeaderStyles: React.CSSProperties = {
    backgroundColor: 'white', // bg-gray-800
    color: 'black',
  };

  const tableHeaderCellStyles: React.CSSProperties = {
    border: '1px solid #4b5563',
    padding: '0.5rem',
    textAlign: 'center',
    wordBreak: 'break-word',
    fontSize: '12px',
  };

  const evenTableCellStyles: React.CSSProperties = {
    border: '1px solid #4b5563',
    padding: '0.5rem',
    textAlign: 'center',
    fontWeight: 500,
    wordBreak: 'break-word',
    fontSize: '12px',
  };

  const oddTableCellStyles: React.CSSProperties = {
    border: '1px solid #4b5563',
    padding: '0.5rem',
    textAlign: 'center',
    fontWeight: 600,
    wordBreak: 'break-word',
    fontSize: '12px',
  };

  const rowStyles = {
    transition: 'all 0.2s ease-in-out',
  };

  const oddRowStyles = {
    backgroundColor: 'white', // bg-gray-100
  };

  const evenRowStyles = {
    backgroundColor: '#fff', // bg-gray-200
  };

  const hoverRowStyles = {
    backgroundColor: '#fff', // bg-blue-100
  };

  return (
    <div style={{ width: '794px', height: '1123px', margin: '0 auto' }}>
      <div style={tableStyles}>
        <table style={{
          width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '16px', tableLayout: 'fixed',
          wordWrap: 'break-word'
        }}>
          <thead>
            <tr style={tableHeaderStyles}>
              <th style={tableHeaderCellStyles}>CHEST NO.</th>
              <th style={tableHeaderCellStyles}>NAME</th>
              <th style={tableHeaderCellStyles}>CLASS</th>
              <th style={tableHeaderCellStyles}>DIVISION</th>
              <th style={tableHeaderCellStyles}>PLACE</th>
              <th style={tableHeaderCellStyles}>GRADE</th>
            </tr>
          </thead>
          <tbody>
            {sortedStudents.map((student, index) => {
              // Dynamically assign row styles (odd/even rows, hover effect)
              const isOddRow = index % 2 === 1;
              const rowStyle = isOddRow ? oddRowStyles : evenRowStyles;
              const combinedRowStyles = { ...rowStyles, ...rowStyle };

              return (
                <tr
                  key={index}
                  style={combinedRowStyles}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverRowStyles.backgroundColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = rowStyle.backgroundColor)}
                >
                  <td style={oddTableCellStyles}>{student.chestNo}</td>
                  <td style={evenTableCellStyles}>{student.name.toUpperCase()}</td>
                  <td style={oddTableCellStyles}>{student.class}</td>
                  <td style={evenTableCellStyles}>{student.division.toUpperCase()}</td>
                  <td style={oddTableCellStyles}>{student.place}</td>
                  <td style={evenTableCellStyles}>A</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
