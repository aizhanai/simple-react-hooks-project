import { useState } from "react";
const data = [
  {
    name: "Ainura",
    id: 1
  },
  {
    name: "Aizhan",
    id: 2
  },
  {
    name: "Akerke",
    id: 3
  },
  {
    name: "Anna",
    id: 4
  }
];
const Names = () => {
  //    const [name, setName] = useState('Burcu');
  //     const handleClick = () => {
  //        if(name === 'Burcu'){
  //            setName('Ainura')
  //        } else {
  //            setName('Burcu')
  //        }
  //     }
  // const [students, setStudents] = useState(data)
  // const handleClick = (id) => {
  //     const newStud = students.filter(student => student.id !== id);
  //     setStudents(newStud)
  // }
  const [person, setPerson] = useState({
    name: "Aizhan",
    age: 20,
    message: "lalala"
  });
  const handleClick = () => {
    person.message = "new message";
    setPerson({ ...person, message: "new message" });
  };
  return (
    <div>
      {/* <ul>
                {students.map(student => {
                    return (
                        <>
                        <li key={student.id}>{student.name}</li>
                        <button onClick={() => handleClick(student.id)}>Delete</button>
                        </>
                    )
                })}
                </ul> */}
      <h1>{person.name}</h1>
      <h2>{person.message}</h2>
      <button onClick={() => handleClick()}>Change Message</button>
    </div>
  );
};
export default Names;
