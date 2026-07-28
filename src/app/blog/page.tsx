"use client";

import React, { useState, useMemo } from "react";
import ChatWidget from "@/components/ChatWidget";
import { articles, Article } from "@/data/articles";

export default function BlogPage() {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    articles.forEach((article) => {
      article.tags.forEach((tag) => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
  }, []);

  // Filter articles based on platform, search query, and selected tag
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesPlatform =
        selectedPlatform === "ALL" ||
        article.platform.toUpperCase() === selectedPlatform;

      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesTag = !selectedTag || article.tags.includes(selectedTag);

      return matchesPlatform && matchesSearch && matchesTag;
    });
  }, [selectedPlatform, searchQuery, selectedTag]);

  // Helper for platform badge colors
  const getPlatformBadgeClasses = (platform: "Medium" | "Dev.to" | "LinkedIn") => {
    switch (platform) {
      case "Medium":
        return "bg-emerald-100 text-emerald-800 border-emerald-400";
      case "Dev.to":
        return "bg-zinc-100 text-zinc-950 border-zinc-900";
      case "LinkedIn":
        return "bg-blue-100 text-blue-800 border-blue-400";
      default:
        return "bg-gray-100 text-gray-800 border-gray-400";
    }
  };

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full border-b-2 border-on-surface sticky top-0 bg-surface z-50">
        <nav className="flex justify-between items-center px-lg py-md max-w-container-max mx-auto">
          <div className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary font-black tracking-tighter">
            H_SINGH_AI
          </div>
          <div className="hidden md:flex gap-lg items-center">
            <a
              className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors duration-150 py-1"
              href="/#projects"
            >
              Projects
            </a>
            <a
              className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors duration-150 py-1"
              href="/#experience"
            >
              Experience
            </a>
            <a
              className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors duration-150 py-1"
              href="/#value"
            >
              Stack
            </a>
            <a
              className="font-label-caps text-label-caps uppercase tracking-wider text-primary font-bold border-b-2 border-primary transition-colors duration-150 py-1"
              href="/blog"
            >
              Articles
            </a>
            <a
              className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors duration-150 py-1"
              href="/#contact"
            >
              Contact
            </a>
          </div>
          <a
            href="/resume.pdf"
            download="Hargurjeet_Singh_Resume.pdf"
            className="neo-brutalist-border bg-primary-container text-white px-md py-sm font-label-caps hard-shadow-sm active:translate-x-0.5 active:translate-y-0.5 transition-transform btn-shift inline-block text-center"
          >
            RESUME.PDF
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-container-max mx-auto px-lg py-xl flex-grow w-full space-y-xl">
        {/* Hero Section */}
        <section className="space-y-md">
          <div className="font-label-caps text-primary tracking-widest text-xs">
            // WRITINGS_&_DEEP_DIVES
          </div>
          <h1 className="text-display-lg text-4xl md:text-6xl font-black uppercase tracking-tighter text-on-surface">
            WRITINGS &amp; BLOGS
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            A comprehensive catalog of technical articles, deep dives on AI architectures, benchmark analysis, and production engineering practices across Medium, Dev.to, and LinkedIn.
          </p>

          {/* Social Stats/Links */}
          <div className="flex flex-wrap gap-md mt-md">
            <a
              href="https://gurjeet333.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-brutalist-border bg-white p-md hard-shadow-sm hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_var(--on-surface)] transition-all font-label-caps text-xs flex items-center gap-xs"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
              Medium Profile
            </a>
            <a
              href="https://dev.to/gurjeet333"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-brutalist-border bg-white p-md hard-shadow-sm hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_var(--on-surface)] transition-all font-label-caps text-xs flex items-center gap-xs"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-950 inline-block"></span>
              Dev.to Profile
            </a>
            <a
              href="https://www.linkedin.com/in/hargurjeet/"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-brutalist-border bg-white p-md hard-shadow-sm hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_var(--on-surface)] transition-all font-label-caps text-xs flex items-center gap-xs"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block"></span>
              LinkedIn Profile
            </a>
          </div>
        </section>

        {/* Filters and Search Section */}
        <section className="space-y-md border-t-2 border-on-surface pt-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-md items-center">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <input
                type="text"
                placeholder="Search articles by title, description or tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full neo-brutalist-border p-md pr-10 bg-white font-body-md text-on-surface outline-none focus:bg-surface-container-low transition-colors duration-150 placeholder:text-outline/70"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-outline material-symbols-outlined pointer-events-none">
                search
              </span>
            </div>

            {/* Platform Filter Buttons */}
            <div className="md:col-span-6 flex flex-wrap gap-sm md:justify-end">
              {["ALL", "MEDIUM", "DEV.TO", "LINKEDIN"].map((platform) => {
                const isActive = selectedPlatform === platform;
                return (
                  <button
                    key={platform}
                    onClick={() => {
                      setSelectedPlatform(platform);
                      setSelectedTag(null); // Reset tag filter on platform switch
                    }}
                    className={`neo-brutalist-border px-md py-sm font-label-caps text-xs hard-shadow-sm btn-shift transition-colors duration-150 ${
                      isActive
                        ? "bg-primary-container text-white"
                        : "bg-white text-on-surface hover:bg-surface-container-low"
                    }`}
                  >
                    {platform}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tags cloud */}
          <div className="flex flex-wrap gap-xs items-center">
            <span className="font-label-caps text-[11px] text-on-surface-variant mr-sm uppercase">
              Filter by Tag:
            </span>
            <button
              onClick={() => setSelectedTag(null)}
              className={`border border-on-surface rounded-sm px-2 py-xs font-code-sm text-xs transition-colors ${
                !selectedTag
                  ? "bg-on-surface text-white"
                  : "bg-white text-on-surface hover:bg-surface-container-low"
              }`}
            >
              All Tags
            </button>
            {allTags.map((tag) => {
              const isSelected = selectedTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`border border-on-surface rounded-sm px-2 py-xs font-code-sm text-xs transition-colors ${
                    isSelected
                      ? "bg-on-surface text-white"
                      : "bg-white text-on-surface hover:bg-surface-container-low"
                  }`}
                >
                  #{tag}
                </button>
              );
            })}
          </div>
        </section>

        {/* Articles Grid */}
        <section className="space-y-lg">
          <div className="flex justify-between items-center border-b border-on-surface pb-xs">
            <span className="font-label-caps text-xs text-on-surface-variant">
              Showing {filteredArticles.length} of {articles.length} writings
            </span>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              {filteredArticles.map((article, idx) => (
                <article
                  key={idx}
                  className="neo-brutalist-border bg-white p-lg flex flex-col justify-between hard-shadow-hover relative"
                >
                  <div className="space-y-md">
                    {/* Card Header Meta */}
                    <div className="flex justify-between items-center">
                      <span className="font-code-sm text-xs text-on-surface-variant">
                        {article.date}
                      </span>
                      <span
                        className={`font-label-caps text-[10px] px-2 py-xs border-2 border-on-surface hard-shadow-sm font-bold ${getPlatformBadgeClasses(
                          article.platform
                        )}`}
                      >
                        {article.platform.toUpperCase()}
                      </span>
                    </div>

                    {/* Article Title */}
                    <h3 className="font-display-lg text-headline-md font-bold text-on-surface hover:text-primary transition-colors duration-150">
                      <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="after:absolute after:inset-0"
                      >
                        {article.title}
                      </a>
                    </h3>

                    {/* Description */}
                    <p className="text-body-md text-on-surface-variant line-clamp-3">
                      {article.description}
                    </p>
                  </div>

                  {/* Card Tags */}
                  <div className="flex flex-wrap gap-xs mt-lg pt-md border-t border-dashed border-outline/30 z-10">
                    {article.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setSelectedTag(tag);
                        }}
                        className="font-code-sm text-[11px] text-on-surface-variant hover:text-primary cursor-pointer transition-colors bg-surface-container-low px-2 py-xs border border-on-surface/20 hover:border-on-surface"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="neo-brutalist-border bg-white p-xl text-center space-y-md">
              <span className="material-symbols-outlined text-[48px] text-outline">
                search_off
              </span>
              <h3 className="font-display-lg text-headline-md font-bold">
                No Articles Found
              </h3>
              <p className="text-body-md text-on-surface-variant max-w-md mx-auto">
                No writings matched your active platform, search query, or tag filter. Try resetting your search filters.
              </p>
              <button
                onClick={() => {
                  setSelectedPlatform("ALL");
                  setSelectedTag(null);
                  setSearchQuery("");
                }}
                className="neo-brutalist-border bg-primary-container text-white px-md py-sm font-label-caps hard-shadow-sm active:translate-x-0.5 active:translate-y-0.5 transition-transform btn-shift inline-block"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t-2 border-on-surface mt-xl bg-surface-container-low">
        <div className="flex flex-col md:flex-row justify-between items-center px-lg py-xl max-w-container-max mx-auto gap-md">
          <div className="font-code-sm text-code-sm font-bold text-on-surface uppercase">
            H_SINGH_PORTFOLIO // BUILD_2025.02.RAG
          </div>
          <div className="flex gap-lg">
            <a
              className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-200 uppercase"
              href="https://github.com/hargurjeet"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-200 uppercase"
              href="https://www.linkedin.com/in/hargurjeet/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-200 uppercase"
              href="https://mail.google.com/mail/?view=cm&to=gurjeet333@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </div>
          <div className="font-label-caps text-label-caps text-on-surface-variant opacity-60">
            © 2025 HARGURJEET SINGH GANGER. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
      <ChatWidget />
    </div>
  );
}
