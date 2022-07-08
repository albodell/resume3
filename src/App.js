import "./styles.css";
import { Paragraph, Document, Packer } from "docx";
import { saveAs } from "file-saver";
import MyForm from "./MyForm";
//import { render } from "react-dom";

export default function App() {
  /**######################################## */
  const generate = () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              text: "butt",
              bullet: {
                level: 0 //How deep you want the bullet to be
              }
            }),
            new Paragraph({
              text: "testing",
              bullet: {
                level: 0
              }
            })
          ]
        }
      ]
    });

    Packer.toBlob(doc).then((blob) => {
      console.log(blob);
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });
  };
  return (
    <div className="App">
      <h1>Hello </h1>
      <MyForm />
      <h2>Edit to see some magic happen!</h2>
      <button onClick={generate}>Generate doc</button>
    </div>
  );
}

//render(<App />, document.getElementById('root'));
