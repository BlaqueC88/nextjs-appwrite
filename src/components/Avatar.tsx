import React from "react";

type Props = {
  img: String;
  alt?: String;
}

const Avatar: React.FC<Props> = ({ img, alt }) => {
  return (
    <div className="rounded-full overflow-hidden w-full pt-[100%] relative">
      <div className="absolute inset-0">
        <img
          src={img}
          alt={alt || img}
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
}

export default Avatar;