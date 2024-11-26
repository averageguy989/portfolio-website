

export const ProjectCard = ({
    source
}) => {
    return (
        <div>
            <div class="group relative overflow-hidden col-span-1 aspect-square rounded-2xl">
                <img 
                    src={source} 
                    alt="Random Image" 
                    class="object-cover transform transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                />
            </div>

        </div>  
    )
}