import { SKILLOPTS } from "public/options";
import { useCallback, useRef, useState } from "react";
import ReactTags from "react-tag-autocomplete";

const AutoTag = ({ tags, setTags }) => {
  const [suggestions, setSuggestions] = useState(SKILLOPTS && SKILLOPTS);
  const reactTags = useRef();

  const onDelete = useCallback(
    tagIndex => {
      setTags(tags.filter((_, i) => i !== tagIndex));
    },
    [tags]
  );

  const onAddition = useCallback(
    newTag => {
      setTags([...tags, newTag]);
    },
    [tags]
  );
  console.log(tags);

  return (
    <div>
      <ReactTags
        ref={reactTags}
        tags={tags}
        suggestions={suggestions}
        onDelete={onDelete}
        onAddition={onAddition}
      />
    </div>
  );
};

export default AutoTag;
