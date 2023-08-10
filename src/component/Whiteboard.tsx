import { useState } from "react";
import Container from "react-bootstrap/esm/Container";

export default function Whiteboard({students}:{students:string[]}) {

  const [whiteboardStudent, setWhiteboardStudent] = useState('sima');
  return (
    <Container>
      <p>Today's whiteboard was perfomed by {whiteboardStudent}</p>
      <button
        onClick={() => {
          setWhiteboardStudent(
            students[Math.floor(Math.random() * students.length)]
          );
        }}
      >
        Update Whiteboard Student
      </button>
    </Container>
  );
}
