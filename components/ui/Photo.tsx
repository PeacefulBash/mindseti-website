import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Scene, type SceneName } from "./Scene";

/**
 * Shows a real photograph when one exists, otherwise the illustrated scene.
 * To add a photo, save it in public/images/photos/ using the file names below
 * (jpg, jpeg, webp or png). No code changes needed.
 *
 *   home, students, prefects, teachers, parents, poetry
 *
 * Only use photographs with written consent from every learner, parent and adult shown.
 */
const baseName: Record<SceneName, string> = {
  all: "home",
  whole: "home",
  about: "home",
  students: "students",
  prefects: "prefects",
  teachers: "teachers",
  parents: "parents",
  poetry: "poetry",
};

const extensions = ["jpg", "jpeg", "webp", "png"];

function findPhoto(scene: SceneName): string | null {
  for (const ext of extensions) {
    const file = `${baseName[scene]}.${ext}`;
    if (fs.existsSync(path.join(process.cwd(), "public", "images", "photos", file))) {
      return `/images/photos/${file}`;
    }
  }
  return null;
}

export function Photo({
  scene,
  alt,
  priority = false,
  sizes = "(min-width: 1024px) 40vw, 90vw",
}: {
  scene: SceneName;
  alt: string;
  priority?: boolean;
  sizes?: string;
}) {
  const src = findPhoto(scene);
  if (src) {
    return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />;
  }
  return <Scene name={scene} className="absolute inset-0 h-full w-full" />;
}

const shapes = {
  arch: "shape-arch",
  leaf: "shape-leaf",
  blob: "shape-blob",
  card: "shape-card",
} as const;

export function PhotoFrame({
  scene,
  alt,
  shape = "arch",
  aspect = "aspect-[4/5]",
  glow = "",
  priority,
  sizes,
  className = "",
}: {
  scene: SceneName;
  alt: string;
  shape?: keyof typeof shapes;
  aspect?: string;
  glow?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <div className={`glow ${glow} ${shapes[shape]} ${aspect} relative overflow-hidden ${className}`}>
      <Photo scene={scene} alt={alt} priority={priority} sizes={sizes} />
    </div>
  );
}
