import React from "react";
import { ISocialMedia } from "../..";

interface ISocialMediaProps {
  data: ISocialMedia[];
}

export const SocialMedia: React.FunctionComponent<ISocialMediaProps> = ({
  data,
}) => {
  return (
    <div>
      {data.map((social, index) => (
        <a href={social.link} target="_blank" rel="noreferrer" key={index}>
          <img src={social.icon} alt={`social-${index}`} />
        </a>
      ))}
    </div>
  );
};
