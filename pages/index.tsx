/* eslint-disable prettier/prettier */
import { Link, Snippet, Code, button as buttonStyles } from "@nextui-org/react";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import SingleItem from "@/components/singleItem";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-wrap items-start pl-8 justify-center gap-x-2">
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
      </section>
    </DefaultLayout>
  );
}
