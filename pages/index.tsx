import { gql, useQuery } from '@apollo/client';
import { Stack } from '@chakra-ui/react';
import { getApolloClient } from '@wpengine/headless';
import { getNextStaticProps } from '@wpengine/headless/next';
import Layout from 'components/Layout';
import PostBox from 'components/PostBox';
import { GetStaticPropsContext } from 'next';
import React from 'react';

const featuredPostsQuery = gql`
  query {
    posts(where: { categoryName: "featured" }) {
      nodes {
        title
        excerpt
        slug
        tags(where: { search: "collection-" }) {
          nodes {
            name
          }
        }
      }
    }
  }
`;

function Home() {
  const { data } = useQuery<WPGraphQL.GetPostsQuery>(featuredPostsQuery);

  return (
    <Layout>
      <Stack spacing={8}>
        {data?.posts.nodes.map(({ slug, title, excerpt}) => (
          <PostBox key={slug} slug={slug} title={title} content={excerpt} />
        ))}
      </Stack>
    </Layout>
  );
}

export default Home;

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const client = getApolloClient(ctx);
  await client.query<{
    posts: WPGraphQL.RootQuery['posts'];
  }>({
    query: featuredPostsQuery,
  });

  return getNextStaticProps(ctx);
}
