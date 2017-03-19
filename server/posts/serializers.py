from rest_framework import serializers
from posts.models import Post, HomepageFeature


class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = (
            'id',
            'author',
            'title',
            'description',
            'main_img_url',
            'splash_img_url',
            'iframe_url',
            'created_date',
            'published_date',
        )


class HomepageFeatureSerializer(serializers.ModelSerializer):

    class Meta:
        model = HomepageFeature
        fields = ('id', 'title', 'post')
