import Image from "next/image";

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      image: "/images/course-01.jpg",
      title: "Programming Fundamentals",
    },
    {
      id: 2,
      image: "/images/course-02.jpg",
      title: "Web 2 Using NextJs",
    },
    {
      id: 3,
      image: "/images/course-03.jpg",
      title: "Earn as You Learn",
    },
  ];

  return (
    <section className="">
      <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto py-16 xl:mt-20 md:mt-10 ">
        <h2 className="lg:text-4xl sm:text-4xl text-3xl sm:text-left text-center text-main font-extrabold text-[rgb(4,78,131)] mt-10 mb-10">
          Core Courses Sequence
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
                <h3 className="xl:text-xl lg:text-lg text-sm font-bold mb-2 truncate">{course.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
