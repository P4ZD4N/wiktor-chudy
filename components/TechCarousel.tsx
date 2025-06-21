"use client"

const TechCarousel = () => {

  const technologies = [
    { name: "Java", icon: "/icons/java.png" },
    { name: "JavaScript", icon: "/icons/javascript.png" },
    { name: "TypeScript", icon: "/icons/typescript.png" },
    { name: "C++", icon: "/icons/cpp.png" },
    { name: "Bash", icon: "/icons/bash.png" },
    { name: "Spring", icon: "/icons/spring.svg" },
    { name: "Hibernate", icon: "/icons/hibernate.png" },
    { name: "Angular", icon: "/icons/angular.png" },
    { name: "Bootstrap", icon: "/icons/bootstrap.png" },
    { name: "HTML", icon: "/icons/html.png" },
    { name: "CSS", icon: "/icons/css.png" }
  ]

  return (
    <div className="overflow-hidden whitespace-nowrap my-8">
      <div className="inline-flex animate-scroll space-x-8">
        {technologies.concat(technologies).map((tech, index) => (
          <div key={index} className="flex flex-col items-center w-24">
            <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-2" />
            <span className="text-sm text-gray-700 dark:text-gray-300">{tech.name}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default TechCarousel
