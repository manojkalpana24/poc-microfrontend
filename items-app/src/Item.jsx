import React from "react";
import Avatar from "@pluralsight/ps-design-system-avatar";
import Card from "@pluralsight/ps-design-system-card";
import {
  BookmarkIcon,
  MoreIcon,
  PathIcon,
  PlayCircleIcon,
} from "@pluralsight/ps-design-system-icon";

export default function Item({ title, path, progress, imgUrl }) {
  return (
    <Card
      tag={path ? <Card.Tag icon={<PathIcon />}>Path</Card.Tag> : <></>}
      title={<Card.Title>{title}</Card.Title>}
      progress={progress}
      image={
        <Card.Image
          src={imgUrl}
          aria-label="img desc"
        />
      }
      metadata1={["Brice Wilson", "Advanced"]}
      metadata2={["0m watched"]}
      size={Card.sizes.small}
    />
  );
}
