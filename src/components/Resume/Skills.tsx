import LineItem from "./LineItem";
import Tag from "../tag/Tag";

export default function Skills() {
    return (
        <>
        <div className="container bg-color-810 dark:bg-[#0D0D0D] py-12 px-4 sm:px-5 md:px-10 lg:px-20">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
          <div className="col-span-1">
            <h4 className="text-5xl dark:text-white font-medium mb-6">
              Working Skills
            </h4>
            <LineItem />
            {/* experience percent items */}
          </div>
          <div className="col-span-1">
            <h4 className="text-5xl dark:text-white font-medium mb-8">
              Knowledges
            </h4>

            <div className="flex gap-x-3 gap-y-3 md:gap-y-3 md:gap-x-3 flex-wrap">
              <Tag />
            </div>
            {/* Knowledges items */}
          </div>
        </div>
      </div>
    </>
    )
}