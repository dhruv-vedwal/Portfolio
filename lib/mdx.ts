import fs from "fs";
import path from "path";
import matter from "gray-matter";

const NOTES_PATH = path.join(process.cwd(), "content/notes");

export interface NoteData {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

// Ensure the directory exists
function ensureNotesDirectory() {
  if (!fs.existsSync(NOTES_PATH)) {
    fs.mkdirSync(NOTES_PATH, { recursive: true });
  }
}

// Fetch a single note by its filename slug
export function getNoteBySlug(slug: string): NoteData | null {
  try {
    ensureNotesDirectory();
    const filePath = path.join(NOTES_PATH, `${slug}.mdx`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title || "Untitled Note",
      excerpt: data.excerpt || "",
      date: data.date || "",
      readTime: data.readTime || "5 min read",
      category: data.category || "General",
      content,
    };
  } catch (error) {
    console.error(`Error reading MDX note: ${slug}`, error);
    return null;
  }
}

// Fetch all available notes sorted by publication date
export function getAllNotes(): NoteData[] {
  try {
    ensureNotesDirectory();
    const files = fs.readdirSync(NOTES_PATH);
    
    const notes = files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => {
        const slug = file.replace(/\.mdx$/, "");
        const note = getNoteBySlug(slug);
        return note;
      })
      .filter((note): note is NoteData => note !== null);

    // Sort by publication date descending
    return notes.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (error) {
    console.error("Error reading all MDX notes", error);
    return [];
  }
}
