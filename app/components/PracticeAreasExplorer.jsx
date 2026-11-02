"use client";

import { useState } from "react";
import Link from "next/link";
import { firm, moreAreas, routeSections } from "../content";

const routeGroups = [
  {
    id: "uk-routes",
    code: "UK",
    name: "United Kingdom",
    description: "Advice for work, study, family, settlement and challenging decisions.",
  },
];
const designNumbers = {
  classic: 1,
  clean: 2,
  premium: 3,
  professional: 4,
  editorial: 5,
};

export default function PracticeAreasExplorer({ design }) {
  const [query, setQuery] = useState("");
  const searchTerms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const visibleRoutes = routeSections.filter((route) => {
    const searchableText = [
      route.title,
      route.code,
      route.group,
      route.answer,
      ...route.detail,
      ...route.points,
    ]
      .join(" ")
      .toLowerCase();
    return searchTerms.every((term) => searchableText.includes(term));
  });

  return (
    <main className="paExplorer" data-design={design}>
      <section className="paHero">
        <div className="paHeroInner">
          <div className="paHeroCopy">
            <p className="paEyebrow">
              <Link href={`/design-${designNumbers[design]}`}>GD Thiru &amp; Co.</Link>
              <span aria-hidden="true">/</span>
              Immigration practice
            </p>
            <h1>Find the right route.<br />Move forward with clarity.</h1>
            <p className="paHeroLead">
              Clear, careful guidance for UK immigration. Start with what you
              want to do; we&apos;ll help you understand the next step.
            </p>
            <div className="paHeroActions">
              <a className="paPrimaryAction" href="#route-finder">Explore routes <span aria-hidden="true">↓</span></a>
              <a className="paSecondaryAction" href={firm.phoneLink}>Speak to our team <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <aside className="paHeroAside" aria-label="Practice overview">
            <span className="paAsideLabel">A considered approach</span>
            <p className="paAsideStatement">
              The right advice begins with understanding your circumstances.
            </p>
            <div className="paHeroStats">
              <div>
                <strong>{routeSections.length.toString().padStart(2, "0")}</strong>
                <span>UK practice areas</span>
              </div>
            </div>
            <p className="paAsideFoot">Chennai · United Kingdom</p>
          </aside>
        </div>
      </section>

      <section className="paFinder" id="route-finder" aria-label="Find an immigration route">
        <div className="paFinderIntro">
          <p className="paEyebrow">Explore our work</p>
          <h2>Which route are you looking for?</h2>
        </div>
        <div className="paFinderControls">
          <label className="paSearch">
            <span className="paSearchIcon" aria-hidden="true">⌕</span>
            <span className="paVisuallyHidden">Search immigration routes</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search work, family, study, appeals..."
            />
            {query && (
              <button type="button" onClick={() => setQuery("")} aria-label="Clear search">
                Clear
              </button>
            )}
          </label>
        </div>
        <p className="paResultCount" aria-live="polite">
          Showing <strong>{visibleRoutes.length}</strong> of {routeSections.length} routes
        </p>
      </section>

      <div className="paRouteGroups">
        {routeGroups.map((group, index) => {
          const routes = visibleRoutes.filter((route) => route.group === group.code);
          if (!routes.length) return null;

          return (
            <section className="paRouteSection" id={group.id} key={group.code}>
              <header className="paSectionHeading">
                <span className="paSectionIndex">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="paEyebrow">Our practice</p>
                  <h2>{group.name} <span>immigration routes</span></h2>
                  <p>{group.description}</p>
                </div>
                <span className="paSectionCount">{routes.length} routes</span>
              </header>

              <div className="paRouteGrid">
                {routes.map((route, routeIndex) => (
                  <article className="paRouteCard" id={route.slug} key={route.slug}>
                    <div className="paRouteMeta">
                      <span className="paRouteNumber">{String(routeIndex + 1).padStart(2, "0")}</span>
                      <span className="paRouteTag">{route.code}</span>
                    </div>
                    <div className="paRouteBody">
                      <h3>{route.title}</h3>
                      <p className="paRouteAnswer">{route.answer}</p>
                      <ul className="paKeyPoints">
                        {route.points.slice(0, 2).map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                      <details className="paRouteDetails">
                        <summary>Eligibility &amp; route guidance</summary>
                        <div className="paDetailsContent">
                          {route.detail.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                          {route.points.length > 2 && (
                            <ul>
                              {route.points.slice(2).map((point) => (
                                <li key={point}>{point}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </details>
                      <a className="paRouteLink" href={firm.phoneLink}>
                        Discuss this route <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
        {visibleRoutes.length === 0 && (
          <p className="paEmptyState">
            No routes match that search. Try a different search term.
          </p>
        )}
      </div>

      <section className="paMoreRoutes">
        <details>
          <summary>Other routes and related immigration matters</summary>
          <p>{moreAreas}</p>
        </details>
      </section>

      <section className="paClosing">
        <div>
          <p className="paEyebrow">A useful first conversation</p>
          <h2>Not sure where your case fits?</h2>
          <p>Every application turns on its own facts. Speak with the firm about your circumstances and the options worth exploring.</p>
        </div>
        <div className="paClosingAction">
          <a className="paPrimaryAction" href={firm.phoneLink}>Call {firm.phoneDisplay} <span aria-hidden="true">↗</span></a>
          <span>{firm.hours}</span>
        </div>
      </section>

      <p className="paDisclaimer">
        General information only, not legal advice. Immigration rules change and outcomes depend on individual circumstances. No outcome is guaranteed.
      </p>
    </main>
  );
}
