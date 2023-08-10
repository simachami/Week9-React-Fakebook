import Body from '../component/Body';
import DisplayClass from '../component/DisplayClass';
import Whiteboard from '../component/Whiteboard';

export default function MatrixClassroomPage() {
  const matrixStudents: Array<string> = [
    'christian',
    'ben',
    'sima',
    'david',
    'michael',
  ];
  return (
    <Body sidebar>
      <DisplayClass students={matrixStudents} />
      <Whiteboard students={matrixStudents} />
    </Body>
  );
}
