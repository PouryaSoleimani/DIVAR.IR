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
      <section className="flex flex-wrap items-center justify-center pl-2 space-x-2 w-full">
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
