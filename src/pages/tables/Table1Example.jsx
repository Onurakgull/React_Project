import { Table1 } from "./Table1";
import "./Example.css";

const rows = [
  {
    name: "Zoe Blogs",
    level: "Intermediate",
    age: 21,
    language: "JavaScript",
    location: "USA",
  },
  {
    name: "Jane Doe",
    level: "Advanced",
    age: 25,
    language: "Python",
    location: "Canada",
  },
  {
    name: "Alice Smith",
    level: "Junior",
    age: 22,
    language: "Ruby",
    location: "UK",
  },
  {
    name: "Bob Kohler",
    level: "Senior",
    age: 35,
    language: "C#",
    location: "Germany",
  },
  {
    name: "Dana White",
    level: "Junior",
    age: 23,
    language: "PHP",
    location: "France",
  },
  {
    name: "Ethan Hunt",
    level: "Advanced",
    age: 28,
    language: "JavaScript",
    location: "USA",
  },
  {
    name: "Fiona Green",
    level: "Senior",
    age: 40,
    language: "Java",
    location: "Ireland",
  },
  {
    name: "Luuk Black",
    level: "Intermediate",
    age: 30,
    language: "JavaScript",
    location: "Netherlands",
  },
  {
    name: "Hannah Isak",
    level: "Junior",
    age: 24,
    language: "Kotlin",
    location: "Sweden",
  },
];

const columns = ["name", "level", "language", "location"];

export const Table1Example = () => {
  return (
    <section className="table-2-page">
      <header>
        <div className="content">
          
        </div>
      </header>
      <div className="card">
        <div className="wrapper">
          <Table1 rows={rows} columns={columns} />
        </div>
      </div>
    </section>
  );
};