import {
  Box,
  MergeWithAs,
  Heading,
  Text,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export interface PostBoxProps
  extends MergeWithAs<
    React.ComponentProps<'div'>,
    React.ComponentProps<'div'>,
    {},
    'div'
  > {
  title: string;
  content: string;
  slug: string;
}

export default function PostBox({
  title,
  content,
  slug,
  ...rest
}: PostBoxProps) {
  return (
    <LinkBox
      as="article"
      shadow="md"
      maxW="xl"
      p="5"
      borderWidth="1px"
      rounded="md"
      {...rest}>
      <Heading fontSize="xl">
        <Link href={`/${slug}`}>
          <LinkOverlay href={`/${slug}`}>{title}</LinkOverlay>
        </Link>
      </Heading>
      <Text as="div" mt={4} dangerouslySetInnerHTML={{ __html: content }} />
    </LinkBox>
  );
}
