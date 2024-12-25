import Image from "next/image";

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      image: "/images/course-04.jpg",
      title: "Artificial Intelligence",
    },
    {
      id: 2,
      image: "/images/course-05.jpg",
      title: "Web 3 and Metaverse",
    },
    {
      id: 3,
      image: "/images/course-06.jpg",
      title: "Cloud-Native Computing",
    },
    {
      id: 4,
      image: "/images/course-07.jpg",
      title: "Ambient Computing and IoT",
    },
    {
      id: 5,
      image: "/images/course-08.jpg",
      title: "Genomics and Bioinformatics",
    },
    {
      id: 6,
      image: "/images/course-09.jpg",
      title: "Network Programmability and Automation",
    },
  ];
  return (
    <section className="">
      <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-10">
        <h2 className="lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold text-[rgb(4,78,131)] mt-10 mb-10">
          Advanced Courses 
        </h2>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-3 grid-cols-1 gap-10 mt-10">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group shadow-lg bg-white rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl touch:scale-105 touch:shadow-2xl"
            >
              <Image
                src={course.image}
                alt={course.title}
                width={450}
                height={300}
                className="w-full h-auto object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="xl:text-lg text-md sm:text-sm font-bold mb-2 ">{course.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;

