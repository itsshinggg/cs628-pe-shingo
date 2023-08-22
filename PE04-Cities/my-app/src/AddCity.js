import Card from "./Card";


function AddCity() {
  return (
    <div>
      <Card>
        <h1>Add City</h1>
        <form>
            <label for="fname">Name:</label>
            <input type="text" id="lname" name="lname"></input><br></br>
            <label for="fname">Country:</label>
            <input type="text" id="lname" name="lname"></input><br></br>
            <label for="fname">Population:</label>
            <input type="text" id="lname" name="lname"></input><br></br>
            <input type="submit" value="Submit"></input>
        </form>
        </Card>
    </div>
  );
}

export default AddCity;
