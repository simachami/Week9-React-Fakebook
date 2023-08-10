import Container from 'react-bootstrap/esm/Container';

interface DisplayClassableProps {
  students: string[];
}

export default function DisplayClass({ students }: DisplayClassableProps) {
  const instructor = 'sean';
  return (
    <Container>
      <h3>Instructor: {instructor}</h3>
      <h4>Students</h4>
      {students.length > 0 && (
        <ul>
          {students.map((student, i) => (
            <li id={i.toString()} key={i}>
              {' '}
              {student}{' '}
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
