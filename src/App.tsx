import { Input } from "./components/Input";

function App() {
  return (
    <div className="bg-appColor w-full h-screen pt-[5.5rem] px-4">
      <section className="bg-white py-12 px-6 rounded-3xl rounded-br-[100px]">
        <form className="flex gap-4">
          <Input name="day" label="Day" placeholder="DD" />
          <Input name="month" label="Month" placeholder="MM" />
          <Input name="year" label="Year" placeholder="YYYY" />
        </form>
        <div></div>
        <div></div>
      </section>
    </div>
  );
}

export default App;
