import React, { useEffect, useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { TweenOneGroup } from 'rc-tween-one';
import { Input, Tag, theme } from 'antd';
import PropTypes from 'prop-types';

const CollectionTag = ({onTagsChange}) => {
  const { token } = theme.useToken();
  const [tags, setTags] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  let maxLength = 3;

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  const handleClose = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    console.log(newTags);
    setTags(newTags);
    onTagsChange(newTags);
  };
  const showInput = () => {
    setInputVisible(true);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1 && tags.length < maxLength) {
      setTags([...tags, inputValue]);
      // onTagsChange 함수를 호출하여 변경된 태그 배열을 부모 컴포넌트에 전달
      onTagsChange([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue('');
  };

  const forMap = (tag) => {
    const tagElem = (
      <Tag
        closable
        onClose={(e) => {
          e.preventDefault();
          handleClose(tag);
        }}
      >
        {tag}
      </Tag>
    );
    return (
      <span
        key={tag}
        style={{
          display: 'inline-block',
        }}
      >
        {tagElem}
      </span>
    );
  };
  const tagChild = tags.map(forMap);
  const tagPlusStyle = {
    
    display: tags.length >= 3 ? 'none' : 'flex',
    // 중앙 정렬을 위해 추가 스타일
    alignItems: 'center',
    background: token.colorBgContainer,
    borderStyle: 'dashed',
    justifyContent: 'center', // 수평 중앙 정렬을 위해 추가
  };
  
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: 16,
        justifyContent: 'center', // 수평 중앙 정렬을 위해 추가
        
      }}
    >
      <Tag onClick={showInput} style={tagPlusStyle}>
        <PlusOutlined /> 태그 추가하기
      </Tag>
      <TweenOneGroup
        enter={{
          scale: 0.8,
          opacity: 0,
          type: 'from',
          duration: 100,
        }}
        onEnd={(e) => {
          if (e.type === 'appear' || e.type === 'enter') {
            e.target.style = 'display: inline-block';
          }
        }}
        leave={{
          opacity: 0,
          width: 0,
          scale: 0,
          duration: 200,
        }}
        appear={false}
      >
        {tagChild}
      </TweenOneGroup>
      {inputVisible ? (
        <Input
          ref={inputRef}
          type="text"
          size="tall"
          style={{
            width: 78,
          }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      ) : null}
    </div>
  );
  

};

CollectionTag.propTypes = {
  onTagsChange: PropTypes.func, // onTagsChange의 prop 타입을 함수로 정의
};

export { CollectionTag };