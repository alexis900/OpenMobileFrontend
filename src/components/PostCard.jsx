import React from 'react'
import { Card, Icon, Label, Image, Button } from 'semantic-ui-react'
import moment from 'moment'

function PostCard({ post: { id, body, createdAt, username, likeCount, commentCount, likes } }) {
    function likePost() {
        console.log('Like post')
    }

    function commentOnPost(){
        console.log('Comment')
    }

    return (
        <Card>
            <Card.Content>
                <Image floated='right' size='mini' src="https://react.semantic-ui.com/images/avatar/large/molly.png" />
                <Card.Header>{username}</Card.Header>
                <Card.Meta>{moment(createdAt).fromNow(true)}</Card.Meta>
                <Card.Description>{body}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button as="div" labelPosition='right' onClick={likePost}>
                    <Button color='teal' basic>
                        <Icon name="heart"/>
                        Like
                    </Button>
                    <Label basic color='teal' pointing='left'>
                        {likeCount}
                    </Label>
                </Button>
                <Button as="div" labelPosition='right' onClick={commentOnPost}>
                    <Button color='blue' basic>
                        <Icon name="comments"/>
                        Like
                    </Button>
                    <Label basic color='blue' pointing='left'>
                        {commentCount}
                    </Label>
                </Button>
            </Card.Content>
        </Card>
    )
}

export default PostCard