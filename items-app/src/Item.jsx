import React from "react";
import Avatar from "@pluralsight/ps-design-system-avatar";
import Card from "@pluralsight/ps-design-system-card";
import {
  BookmarkIcon,
  MoreIcon,
  PathIcon,
  PlayCircleIcon,
} from "@pluralsight/ps-design-system-icon";

export default function Item(props) {
  return (
    <li>
      <Card
        tag={<Card.Tag icon={<PathIcon />}>Path</Card.Tag>}
        title={<Card.Title>Advanced TypeScript</Card.Title>}
        progress={0}
        image={
          <Card.Image
            src="https://picsum.photos/seed/picsum/540/360"
            aria-label="img desc"
          />
        }
        metadata1={["Brice Wilson", "Advanced"]}
        metadata2={["0m watched"]}
        size={Card.sizes.small}
      />
    </li>
  );
}
