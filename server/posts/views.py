from posts.models import Post, HomepageFeature
from posts.serializers import PostSerializer, HomepageFeatureSerializer

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.reverse import reverse


class PostViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = Post.objects.exclude(published_date__isnull=True)
    serializer_class = PostSerializer

class HomepageFeatureViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = HomepageFeature.objects.all()
    serializer_class = HomepageFeatureSerializer