import Avatar from "@pluralsight/ps-design-system-avatar";
import Card from "@pluralsight/ps-design-system-card";
import {
  BookmarkIcon,
  MoreIcon,
  PathIcon,
  PlayCircleIcon,
} from "@pluralsight/ps-design-system-icon";
import { EqualColumnLayout } from "@pluralsight/ps-design-system-layout";
import React from "react";

function Example() {
  return (
    <EqualColumnLayout count={4}>
      <ul>
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
        <li>
          <Card
            bonusBar={<Avatar size={Avatar.sizes.xSmall} name="Jake Trent" />}
            title={
              <Card.Title>
                Getting Started with Reactive Programming Using RxJS
              </Card.Title>
            }
            progress={20}
            image={
              <Card.Image
                src="https://picsum.photos/seed/picsum/540/360"
                aria-label="img desc"
              />
            }
            metadata1={["Scott Allen", "Intermediate"]}
            metadata2={["23m watched"]}
            size={Card.sizes.small}
          />
        </li>
        <li>
          <Card
            actionBar={[
              <Card.Action
                key="1"
                title="Book action"
                icon={<BookmarkIcon />}
              />,
              <Card.Action key="2" title="More action" icon={<MoreIcon />} />,
            ]}
            title={
              <Card.Title>
                Building a JavaScript Development Environment"
              </Card.Title>
            }
            fullOverlay={
              <Card.FullOverlayLink>
                <a>
                  <PlayCircleIcon size={PlayCircleIcon.sizes.large} />
                </a>
              </Card.FullOverlayLink>
            }
            progress={67}
            image={
              <Card.Image
                src="https://picsum.photos/seed/picsum/540/360"
                aria-label="img desc"
              />
            }
            metadata1={["Cory House", "Intermediate"]}
            metadata2={["3h 23m watched"]}
            size={Card.sizes.small}
          />
        </li>
        <li>
          <Card
            actionBar={[
              <Card.Action
                key="1"
                title="Bookmark action"
                icon={<BookmarkIcon />}
              />,
              <Card.Action key="2" title="More action" icon={<MoreIcon />} />,
            ]}
            actionBarVisible
            title={<Card.Title>Webpack Fundamentals"</Card.Title>}
            progress={100}
            metadata1={["Joe Eames", "Intermediate"]}
            metadata2={["90m watched"]}
            image={
              <Card.Image
                src="https://picsum.photos/seed/picsum/540/360"
                aria-label="img desc"
              />
            }
            size={Card.sizes.small}
          />
        </li>
      </ul>
    </EqualColumnLayout>
  );
}

export default Example;
