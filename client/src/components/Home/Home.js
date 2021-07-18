import { Container, Grid, Grow } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPosts } from '../../actions/posts'
import Form from '../Form/Form'
import Posts from '../Posts/Posts'


const Home = () => {
    const [currentId, setCurrentId] = useState(null)

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getPosts());

    }, [dispatch]);
    return (
        <Grow in>
            <Container>
                <Grid container justifyContent="space-between" alignitem="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home;
