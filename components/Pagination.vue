<template>
    <v-pagination
        :value="page"
        @input="handlePageChange"
        :page-count="pageCount"
        :classes="bootstrapPaginationClasses"
        :labels="paginationAnchorTexts"
        >
    </v-pagination>
</template>

<script>
import vPagination from 'vue-plain-pagination'

export default {
  components: { vPagination },
  props: ['currentPage', 'totalPages'],
  data() {
    return {
      page: 1,
      bootstrapPaginationClasses: {
        ul: 'pagination',
        li: 'page-item',
        liActive: 'active',
        liDisable: 'disabled',
        button: 'page-link'
      },
      paginationAnchorTexts: {
        first: false,
        prev: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="text-success svg-inline--fa fa-caret-left fa-w-6"><path fill="currentColor" d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z" class=""></path></svg>',
        next: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="text-success svg-inline--fa fa-caret-right fa-w-6"><path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" class=""></path></svg>',
        last: false
      }
    }
  },
  computed: {
    pageCount() {
      return this.totalPages == 0 ? 1 : Math.ceil(this.totalPages);
    },
  },
  methods: {
    handlePageChange(v) {
      this.page = v;
      this.$emit('changePage', v);
    }
  }
}
</script>
<style lang="scss">
  .pagination {
    margin-top: 30px;
    justify-content: center;
    li {
      margin: 0 5px;
      .page-link {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #46afc4;
            background: #fff;
            color: #777;
            font-weight: 600;
            border-radius: 10rem!important;
            width: 34px;
            height: 34px;
            padding: 0;
            &:hover {
                color: #fff;
                background: linear-gradient(140deg, #288ca4 0%, #3ea5ba 50%, #4bb4c6);
            }
            &.pagination-link--disable {border: none}
      }
      &.active {
        .page-link {
            color: #fff;
            border-color: #46afc4;
            background: linear-gradient(140deg, #288ca4 0%, #3ea5ba 50%, #4bb4c6);
        }
      }
      &:first-child,
      &:last-child {
        .page-link {
            background: #dedede;
            border-color: #dedede;
            font-size: 22px;
            color: #28a745;
            &:hover,
            &:focus {
                background: #f2f2f2;
                border-color: #f2f2f2;
            }
        }
      }
    }
  }
</style>