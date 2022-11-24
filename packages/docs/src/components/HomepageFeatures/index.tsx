import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<"svg">>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: "Develop components",
        Svg: require("@site/static/img/undraw_mobile_development_re_wwsn.svg")
            .default,
        description: (
            <>
                Break down your UI into simple components and develop them in a
                dedicated workspace.
            </>
        ),
    },
    {
        title: "Overview",
        Svg: require("@site/static/img/undraw_search_re_x5gq.svg").default,
        description: (
            <>
                Get an overview of all your components in a list with sections,
                tags and a handy search input.
            </>
        ),
    },
    {
        title: "Variants",
        Svg: require("@site/static/img/undraw_note_list_re_r4u9.svg").default,
        description: (
            <>
                List all the different variations of your components, making it
                easy to know that everything works as expected.
            </>
        ),
    },
];

function Feature({ title, Svg, description }: FeatureItem) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
